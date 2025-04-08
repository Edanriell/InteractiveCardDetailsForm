package org.example.server.services;

import org.example.server.dtos.CreditCardDto;
import org.example.server.entities.CreditCard;
import org.example.server.exceptions.CardExpiredException;
import org.example.server.exceptions.DuplicateResourceException;
import org.example.server.exceptions.ResourceNotFoundException;
import org.example.server.repositories.CreditCardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


@Service
public class CreditCardService {
	private final CreditCardRepository creditCardRepository;

	@Autowired
	public CreditCardService(CreditCardRepository creditCardRepository) {
		this.creditCardRepository = creditCardRepository;
	}

	public List<CreditCardDto> getAllCreditCards() {
		return creditCardRepository.findAll().stream()
				.map(this::convertToDto)
				.collect(Collectors.toList());
	}

	public CreditCardDto getCreditCardById(Long id) {
		CreditCard creditCard = creditCardRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("CreditCard", "id", id));

		return convertToDto(creditCard);
	}


	public CreditCardDto getCreditCardByNumber(String cardNumber) {
		CreditCard creditCard = creditCardRepository.findByCardNumber(cardNumber)
				.orElseThrow(() -> new ResourceNotFoundException("CreditCard", "cardNumber", cardNumber));

		return convertToDto(creditCard);
	}

	public CreditCardDto createCreditCard(CreditCardDto creditCardDto) {
		// Check if card with same number already exists
		creditCardRepository.findByCardNumber(creditCardDto.getNumber())
				.ifPresent(card -> {
					throw new DuplicateResourceException("CreditCard", "cardNumber", creditCardDto.getNumber());
				});

		// Validate that card is not expired
		if (isCardExpired(creditCardDto.getExpiryMonth(), creditCardDto.getExpiryYear())) {
			throw new CardExpiredException("Credit card has expired");
		}

		CreditCard creditCard = convertToEntity(creditCardDto);
		CreditCard savedCreditCard = creditCardRepository.save(creditCard);
		return convertToDto(savedCreditCard);
	}


	public CreditCardDto updateCreditCard(Long id, CreditCardDto creditCardDto) {
		// Ensure the card exists
		if (!creditCardRepository.existsById(id)) {
			throw new ResourceNotFoundException("CreditCard", "id", id);
		}

		// Check if updating to a card number that already exists (and belongs to different card)
		creditCardRepository.findByCardNumber(creditCardDto.getNumber())
				.ifPresent(existingCard -> {
					if (!existingCard.getId().equals(id)) {
						throw new DuplicateResourceException("CreditCard", "cardNumber", creditCardDto.getNumber());
					}
				});

		// Validate that card is not expired
		if (isCardExpired(creditCardDto.getExpiryMonth(), creditCardDto.getExpiryYear())) {
			throw new CardExpiredException("Credit card has expired");
		}

		CreditCard creditCard = convertToEntity(creditCardDto);
		creditCard.setId(id);
		CreditCard updatedCreditCard = creditCardRepository.save(creditCard);
		return convertToDto(updatedCreditCard);
	}

	public void deleteCreditCard(Long id) {
		if (!creditCardRepository.existsById(id)) {
			throw new ResourceNotFoundException("CreditCard", "id", id);
		}

		creditCardRepository.deleteById(id);
	}

	private CreditCardDto convertToDto(CreditCard creditCard) {
		return new CreditCardDto(
				creditCard.getId(),
				creditCard.getHolderFullName(),
				creditCard.getNumber(),
				creditCard.getExpiryMonth(),
				creditCard.getExpiryYear(),
				creditCard.getCvcCode()
		);
	}

	private CreditCard convertToEntity(CreditCardDto creditCardDto) {
		CreditCard creditCard = new CreditCard();

		creditCard.setId(creditCardDto.getId());
		creditCard.setHolderFullName(creditCardDto.getHolderFullName());
		creditCard.setNumber(creditCardDto.getNumber());
		creditCard.setExpiryMonth(creditCardDto.getExpiryMonth());
		creditCard.setExpiryYear(creditCardDto.getExpiryYear());
		creditCard.setCvcCode(creditCardDto.getCvcCode());

		return creditCard;
	}

	private boolean isCardExpired(int expiryMonth, int expiryYear) {
		java.time.YearMonth currentYearMonth = java.time.YearMonth.now();
		java.time.YearMonth cardExpiryDate = java.time.YearMonth.of(expiryYear, expiryMonth);
		return cardExpiryDate.isBefore(currentYearMonth);
	}
 
}