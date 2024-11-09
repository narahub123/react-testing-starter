import { render, screen } from "@testing-library/react";
import TermsAndConditions from "../../src/components/TermsAndConditions";
import userEvent from "@testing-library/user-event";

describe("TermsAndConditions", () => {
  // 정확한 텍스트와 상태로 렌더링이 되는지 확인
  it("should render with correct text and initial state", () => {
    render(<TermsAndConditions />);

    const heading = screen.getByRole("heading");
    // 요소가 있는지
    expect(heading).toBeInTheDocument();
    // 요소 안의 텍스트 확인
    expect(heading).toHaveTextContent("Terms & Conditions");

    const checkbox = screen.getByRole("checkbox");
    // 요소가 있는지
    expect(checkbox).toBeInTheDocument();
    // 체크박스가 체크가 안되어 있는지
    expect(checkbox).not.toBeChecked();

    const button = screen.getByRole("button");
    // 버튼이 있는지
    expect(button).toBeInTheDocument();
    // 버튼이 사용 불가 상태인지 확인
    expect(button).toBeDisabled();
  });

  // 체크 박스가 체크된 경우
  it("should enable the button when the checkbox is checked", async () => {
    render(<TermsAndConditions />);

    // user interaction : user-event
    const checkbox = screen.getByRole("checkbox");
    const user = userEvent.setup();
    await user.click(checkbox);

    // 체크박스가 체크된 경우 버튼이 사용 가능 상태인지 확인
    expect(screen.getByRole("button")).toBeEnabled();
  });
});
