import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import ViewEmployees from '../pages/ViewEmployees'

describe("when I'm on the create employee page", () => {
    it('should render the about page', () => {
        render(
            <BrowserRouter>
                <ViewEmployees />
            </BrowserRouter>
        )
        expect(screen.getByTestId('viewEmployees')).toBeInTheDocument()
    })
})
