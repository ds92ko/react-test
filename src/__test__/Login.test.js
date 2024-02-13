import { render, screen } from "@testing-library/react";
import Login, { validateEmail } from "../Login"

describe("Test Login Component", () => {
  // 로그인 버튼이 하나만 있는지 테스트
  test('render form with 1 button', async () => {
    render(<Login />);
    const buttonList = await screen.findAllByRole('button');
    expect(buttonList).toHaveLength(1);
  });

  // 이메일 유효성 검증에 통과하지 못한 경우를 테스트
  test("should be failed on email validation", () => {
    const testEmail = "test.com";
    expect(validateEmail(testEmail)).not.toBe(true);
  });

  // 이메일 유효성 검증에 통과한 경우를 테스트
  test("should be succeed on email validation", () => {
    const testEmail = "test@email.com";
    expect(validateEmail(testEmail)).toBe(true);
  });

  // 비밀번호 input의 type이 password로 되어있는지 테스트
  test("password input should have type password", () => {
    render(<Login />);
    const password = screen.getByPlaceholderText("비밀번호 입력");
    expect(password).toHaveAttribute('type', 'password');
  })
})