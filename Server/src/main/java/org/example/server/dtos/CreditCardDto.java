package org.example.server.dtos;

public class CreditCardDto {
	private Long id;
	private String holderFullName;
	private String number;
	private Integer expiryMonth;
	private Integer expiryYear;
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
