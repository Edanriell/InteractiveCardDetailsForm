package org.example.server.dtos;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

public class CreditCardDto {
	private Long id;
	@NotBlank(message = "Cardholder name is required")
	private String holderFullName;
	@NotBlank(message = "Card number is required")
	@Pattern(regexp = "\\d{16}", message = "Card number must be 16 digits")
	private String number;
	@Min(value = 1, message = "Month must be between 1 and 12")
	@Max(value = 12, message = "Month must be between 1 and 12")
	private Integer expiryMonth;
	@Min(value = 2000, message = "Year must be valid")
	private Integer expiryYear;
	@NotBlank(message = "CVC code is required")
	@Pattern(regexp = "\\d{3,4}", message = "CVC must be 3 or 4 digits")
	private String cvcCode;

	public CreditCardDto() {
	}

	public CreditCardDto(Long id, String holderFullName, String number, Integer expiryMonth, Integer expiryYear, String cvcCode) {
		this.id = id;
		this.holderFullName = holderFullName;
		this.number = number;
		this.expiryMonth = expiryMonth;
		this.expiryYear = expiryYear;
		this.cvcCode = cvcCode;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getHolderFullName() {
		return holderFullName;
	}

	public void setHolderFullName(String holderFullName) {
		this.holderFullName = holderFullName;
	}

	public String getNumber() {
		return number;
	}

	public void setNumber(String number) {
		this.number = number;
	}

	public Integer getExpiryMonth() {
		return expiryMonth;
	}

	public void setExpiryMonth(Integer expiryMonth) {
		this.expiryMonth = expiryMonth;
	}

	public Integer getExpiryYear() {
		return expiryYear;
	}

	public void setExpiryYear(Integer expiryYear) {
		this.expiryYear = expiryYear;
	}

	public String getCvcCode() {
		return cvcCode;
	}

	public void setCvcCode(String cvcCode) {
		this.cvcCode = cvcCode;
	}
}
