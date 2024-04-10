import React from 'react'
import { render, screen } from '@testing-library/react'
import { Pruebas } from '../src/pages/Pruebas'

describe('Testing Component Prueba', () => {
    it("Should show text prueba", async () => {
        render(<Pruebas />)
        expect(await screen.findByText('Pruebas')).toBeInTheDocument();
    })
})
