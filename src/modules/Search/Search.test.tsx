import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {Search} from "./Search";

test('smth', async () => {
    render(<Search/>);

    // verify page content for default route
    expect(screen.getByPlaceholderText(/Search for Movies/i)).toBeInTheDocument();

    // verify page content for expected route after navigating
    await userEvent.click(screen.getByText(/My List/i));
    expect(screen.getByText(/You don't have any movies in favorites/)).toBeInTheDocument();
});
