package org.example.server.exceptions;

public class CardExpiredException extends RuntimeException {

	public CardExpiredException(String message) {
		super(message);
	}
}

