import { screen, render } from "@testing-library/vue";
import UserEvent from "@testing-library/user-event";
import { RouterLinkStub } from "@vue/test-utils";
import { useDark } from "@vueuse/core";
import type { Mock } from "vitest";

import NavBar from "@/components/Navigation/NavBar.vue";

import { useRoute } from "vue-router";
vi.mock("vue-router");

const useRouteMock = useRoute as Mock;

describe("Navbar", () => {
  const renderNavBar = () => {
    useRouteMock.mockReturnValue({ name: "Home" });
    render(NavBar, {
      global: {
        stubs: {
          FontAwesomeIcon: true,
          RouterLink: RouterLinkStub
        }
      }
    });
  };
  it("display website name", () => {
    renderNavBar();
    const websiteName = screen.getByText("Games Deal");
    expect(websiteName).toBeInTheDocument();
  });
  it("it display navbar item for navigation", () => {
    renderNavBar();
    const navbarItem = screen.getAllByRole("listitem");

    const navbarName = navbarItem.map((item) => item.textContent);

    expect(navbarName).toEqual(["Browse deals now", "About us", "FAQ"]);
  });

  describe("when user click on sun/moon icon", () => {
    it("changes to dark mode", async () => {
      renderNavBar();

      const isDark = useDark();
      const moonIconButton = screen.getByRole("button");

      await UserEvent.click(moonIconButton);
      isDark.value = true;
      expect(isDark.value).toBe(true);
    });
    it("changes to light mode", async () => {
      renderNavBar();

      const isDark = useDark();
      isDark.value = true;
      const sunIconButton = screen.getByRole("button");

      await UserEvent.click(sunIconButton);
      isDark.value = false;
      expect(isDark.value).toBe(false);
    });
  });
});
