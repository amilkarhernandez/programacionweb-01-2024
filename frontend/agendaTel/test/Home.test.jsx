import React from 'react'
import { render, screen } from '@testing-library/react'
import { Home } from '../src/pages/Home'
import axios from 'axios';

jest.mock('../src/utils/Contants', () => ({
    URL: 'http://test.com.co',
}));

jest.mock('axios');

const mockResponseService = {
    data: [
        {
            id: 1,
            image: "http://example.com",
            names: "Amilkar Hernandez",
            telephone: "2345676"
        }
    ]
}

describe('Testing Page Home', () => {

    afterEach(() => {
        jest.clearAllMocks()
    })
    beforeEach(() => {
        jest.clearAllMocks()
    })

    it("Should Verify Data", async () => {
        axios.get.mockResolvedValue(mockResponseService);
        render(<Home />)
        expect(await screen.findByText('Amilkar Hernandez')).toBeInTheDocument();
    })

    it("Should show text Dashboard", async () => {
        render(<Home />)
        expect(await screen.findByText('Dashboard')).toBeInTheDocument();
    })

})
