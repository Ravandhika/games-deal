import { render, screen } from "@testing-library/vue";

import HomeContent from "@/components/GamesDeal/HomeContent.vue";

describe("HomeContent", () => {
  it("display project name", () => {
    render(HomeContent);
    const projectName = screen.getByText("boilerplate");
    expect(projectName).toBeInTheDocument();
  });
});
