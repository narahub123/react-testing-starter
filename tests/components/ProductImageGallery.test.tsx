import { render, screen } from "@testing-library/react";
import ProductImageGallery from "../../src/components/ProductImageGallery";

describe("ProductImageGallery", () => {
  // 빈 배열을 가지고 있는 경우 빈 dom element를 반환하는지 확인하기
  it("should render nothing if given an empty array", () => {
    const { container } = render(<ProductImageGallery imageUrls={[]} />);

    expect(container).toBeEmptyDOMElement();
  });

  // 배열이 비어 있지 않은 경우
  it("should render a list of images ", () => {
    const imageUrls = ["url1", "url2"];

    render(<ProductImageGallery imageUrls={[]} />);

    const images = screen.getAllByRole("img");
    // 배열의 요소가 두개 인지 확인
    expect(images).toHaveLength(2);
    // 각 img 요소의 src 요소에 url이 있는지 확인
    imageUrls.forEach((url, index) => {
      expect(images[index]).toHaveAttribute("src", url);
    });
  });
});
