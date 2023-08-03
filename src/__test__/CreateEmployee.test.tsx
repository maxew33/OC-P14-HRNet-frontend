import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import CreateEmployee from '../pages/CreateEmployee/CreateEmployee'

describe("when I'm on the create employee page", () => {
    it('should render the about page', () => {
        render(
            <BrowserRouter>
                <CreateEmployee />
            </BrowserRouter>
        )
        expect(screen.getByTestId('createEmployee')).toBeInTheDocument()
    })
})
