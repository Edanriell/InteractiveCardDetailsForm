package org.example.server.entities;

import jakarta.persistence.*;
 
@Entity
@Table(name = "credit_cards")
public class CreditCard {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "holder_fullname", nullable = false)
	private String holderFullName;

	@Column(name = "number", nullable = false, unique = true)
	private String number;

	@Column(name = "expiry_month", nullable = false)
	private Integer expiryMonth;

	@Column(name = "expiry_year", nullable = false)
	private Integer expiryYear;

	@Column(name = "cvc_code", nullable = false)
	private String cvcCode;

	public CreditCard(String holderFullName, String number, Integer expiryMonth, Integer expiryYear, String cvcCode) {
		this.holderFullName = holderFullName;
		this.number = number;
		this.expiryMonth = expiryMonth;
		this.expiryYear = expiryYear;
		this.cvcCode = cvcCode;
	}

	public CreditCard() {

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

	@Override
	public String toString() {
		return "CreditCard{" +
				"id=" + id +
				", cardHolderFullName='" + holderFullName + '\'' +
				", cardNumber='" + number + '\'' +
				", expiryMonth=" + expiryMonth +
				", expiryYear=" + expiryYear +
				", cvcCode='" + cvcCode + '\'' +
				'}';
	}
}