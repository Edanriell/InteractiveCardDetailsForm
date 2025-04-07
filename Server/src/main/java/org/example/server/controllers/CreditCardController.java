package org.example.server.controllers;

import jakarta.validation.Valid;
import org.example.server.dtos.CreditCardDto;
import org.example.server.services.CreditCardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/credit-cards")
public class CreditCardController {
	private final CreditCardService creditCardService;

	@Autowired
	public CreditCardController(CreditCardService creditCardService) {
		this.creditCardService = creditCardService;
	}

	@GetMapping
	public ResponseEntity<List<CreditCardDto>> getAllCreditCards() {
		List<CreditCardDto> creditCards = creditCardService.getAllCreditCards();

		return ResponseEntity.ok(creditCards);
	}

	@GetMapping("/{id}")
	public ResponseEntity<CreditCardDto> getCreditCardById(@PathVariable Long id) {
		CreditCardDto creditCardDto = creditCardService.getCreditCardById(id);

		if (creditCardDto == null) {
			return ResponseEntity.notFound().build();
		}

		return ResponseEntity.ok(creditCardDto);
	}

	@GetMapping("/by-number/{number}")
	public ResponseEntity<CreditCardDto> getCreditCardByNumber(@PathVariable String number) {
		CreditCardDto creditCardDto = creditCardService.getCreditCardByNumber(number);

		if (creditCardDto == null) {
			return ResponseEntity.notFound().build();
		}

		return ResponseEntity.ok(creditCardDto);
	}

	@PostMapping
	public ResponseEntity<CreditCardDto> createCreditCard(@Valid @RequestBody CreditCardDto creditCardDto) {
		CreditCardDto createdCreditCard = creditCardService.createCreditCard(creditCardDto);

		return ResponseEntity.status(HttpStatus.CREATED).body(createdCreditCard);
	}

	@PutMapping("/{id}")
	public ResponseEntity<CreditCardDto> updateCreditCard(@PathVariable Long id, @RequestBody CreditCardDto creditCardDto) {
		CreditCardDto updatedCreditCard = creditCardService.updateCreditCard(id, creditCardDto);

		if (updatedCreditCard == null) {
			return ResponseEntity.notFound().build();
		}

		return ResponseEntity.ok(updatedCreditCard);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteCreditCard(@PathVariable Long id) {
		boolean deleted = creditCardService.deleteCreditCard(id);

		if (!deleted) {
			return ResponseEntity.notFound().build();
		}

		return ResponseEntity.noContent().build();
	}

}
