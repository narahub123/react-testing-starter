import { render, screen } from "@testing-library/react";
import UserList from "../../src/components/UserList";
import { User } from "../../src/entities";

describe("UserList", () => {
  it("should render no users when the users array is empty", () => {
    render(<UserList users={[]} />);

    expect(screen.getByText(/no users/i)).toBeInTheDocument();
  });

  it("should render a list of useers", () => {
    const users: User[] = [
      {
        id: 1,
        name: "Mosh",
      },
      {
        id: 2,
        name: "John",
      },
    ];

    render(<UserList users={users} />);

    users.forEach((user) => {
      const link = screen.getByRole("link", { name: user.name });

      // link가 존재하는지 확인
      expect(link).toBeInTheDocument();
      // link가 href 속성를 가지고 있는지
      expect(link).toHaveAttribute("href", `/users/${user.id}`);
    });
  });
});
