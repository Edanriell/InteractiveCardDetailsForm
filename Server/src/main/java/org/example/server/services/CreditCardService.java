package org.example.server.services;

import org.example.server.dtos.CreditCardDto;
import org.example.server.entities.CreditCard;
import org.example.server.repositories.CreditCardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
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
		Optional<CreditCard> creditCard = creditCardRepository.findById(id);

		return creditCard.map(this::convertToDto).orElse(null);
	}

	public CreditCardDto getCreditCardByNumber(String cardNumber) {
		Optional<CreditCard> creditCard = creditCardRepository.findByCardNumber(cardNumber);

		return creditCard.map(this::convertToDto).orElse(null);
	}

	public CreditCardDto createCreditCard(CreditCardDto creditCardDto) {
		CreditCard creditCard = convertToEntity(creditCardDto);

		CreditCard savedCreditCard = creditCardRepository.save(creditCard);

		return convertToDto(savedCreditCard);
	}

	public CreditCardDto updateCreditCard(Long id, CreditCardDto creditCardDto) {
		if (!creditCardRepository.existsById(id)) {
			return null;
		}

		CreditCard creditCard = convertToEntity(creditCardDto);
		creditCard.setId(id);
		CreditCard updatedCreditCard = creditCardRepository.save(creditCard);

		return convertToDto(updatedCreditCard);
	}

	public boolean deleteCreditCard(Long id) {
		if (!creditCardRepository.existsById(id)) {
			return false;
		}

		creditCardRepository.deleteById(id);

		return true;
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

}