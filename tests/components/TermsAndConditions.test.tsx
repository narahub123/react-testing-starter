import { render, screen } from "@testing-library/react";
import TermsAndConditions from "../../src/components/TermsAndConditions";
import userEvent from "@testing-library/user-event";

describe("TermsAndConditions", () => {
  const renderComponent = () => {
    render(<TermsAndConditions />);

    return {
      heading: screen.getByRole("heading"),
      checkbox: screen.getByRole("checkbox"),
      button: screen.getByRole("button"),
    };
  };

  // 정확한 텍스트와 상태로 렌더링이 되는지 확인
  it("should render with correct text and initial state", () => {
    const { heading, checkbox, button } = renderComponent();

    // 요소 안의 텍스트 확인
    expect(heading).toHaveTextContent("Terms & Conditions");
    // 체크박스가 체크가 안되어 있는지
    expect(checkbox).not.toBeChecked();
    // 버튼이 사용 불가 상태인지 확인
    expect(button).toBeDisabled();
  });

  // 체크 박스가 체크된 경우
  it("should enable the button when the checkbox is checked", async () => {
    const { checkbox, button } = renderComponent();

    // user interaction : user-event
    const user = userEvent.setup();
    await user.click(checkbox);

    // 체크박스가 체크된 경우 버튼이 사용 가능 상태인지 확인
    expect(button).toBeEnabled();
  });
});
