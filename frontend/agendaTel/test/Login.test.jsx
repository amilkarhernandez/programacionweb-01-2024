import React from 'react'

import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Login } from '../src/pages/Login'

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
}));

describe("Testing Component Login", () => {
    it("Should Success Component Login", async () => {
        render(< Login />)
        expect(await screen.findByText('Sign in to your account')).toBeInTheDocument();
    })
    it("Should Display Email and password", async () => {
        render(< Login />)

        //Obtener Elementos
        const inputEmail = screen.getByTestId('email-test');
        const inputPasword = screen.getByTestId('pass-test');

        //Escribir
        fireEvent.change(inputEmail, { target: { value: "danna@gmail.com" } })
        fireEvent.change(inputPasword, { target: { value: "marroquin123" } })

        expect(inputEmail).toHaveDisplayValue("danna@gmail.com")
        expect(inputPasword).toHaveDisplayValue("marroquin123")
    })

    it("Should Not Navigate", async () => {
        render(< Login />)

        //Obtener Elementos
        const inputEmail = screen.getByTestId('email-test');
        const inputPasword = screen.getByTestId('pass-test');

        //Escribir
        fireEvent.change(inputEmail, { target: { value: "danna@gmail.com" } })
        fireEvent.change(inputPasword, { target: { value: "marroquin123" } })

        //Obtener Button
        const button = screen.getByRole('button', { name: /Sign in/i });
        fireEvent.click(button)

        expect(mockedUsedNavigate).not.toHaveBeenCalled();
    })

    it("Should Navigate Home", async () => {
        render(< Login />)

        //Obtener Elementos
        const inputEmail = screen.getByTestId('email-test');
        const inputPasword = screen.getByTestId('pass-test');

        //Escribir
        fireEvent.change(inputEmail, { target: { value: "test@test.com" } })
        fireEvent.change(inputPasword, { target: { value: "123" } })

        //Obtener Button
        const button = screen.getByRole('button', { name: /Sign in/i });
        fireEvent.click(button)

        expect(mockedUsedNavigate).toHaveBeenCalled();

    })
})