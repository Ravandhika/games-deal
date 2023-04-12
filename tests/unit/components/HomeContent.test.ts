import { render, screen } from "@testing-library/vue";

import HomeContent from "@/components/HomePage/HomeContent.vue";

describe.skip("HomeContent", () => {
  it("display project name", () => {
    render(HomeContent);
    const projectName = screen.getByText("boilerplate");
    expect(projectName).toBeInTheDocument();
  });
});
