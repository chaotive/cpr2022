import { AppNavbar } from "components/AppNavbar";
import { useCallback, useState } from "react";
import Indice from "./Indice";

export default function AcercaDe({}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onMenuOpenChange = useCallback((newValue: boolean) => {
    setIsMenuOpen(newValue);
  }, []);
  return (
    <>
      <AppNavbar onMenuOpenChange={onMenuOpenChange} />
      <div
        className={
          "grid grid-cols-1 md:grid-cols-7 " + (isMenuOpen ? "hidden" : "")
        }
      >
        <aside className="bg-[#34005f] hidden md:block md:col-span-2 overflow-y-scroll overscroll-contain h-screen py-5 pr-5">
          <Indice />
        </aside>
        <main className="md:col-span-5 overflow-y-scroll overscroll-contain h-screen grid justify-center">
          <article className="pb-10">
            <div className="pt-7 mt-0 pb-10">
              <div className="prose px-10">
                <h1>¿Qué, por qué, cómo?</h1>
                <div className={"border border-solid rounded-md p-3 mb-3"}>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going through
                    the cites of the word in classical literature, discovered
                    the undoubtable source. Lorem Ipsum comes from sections
                    1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The
                    Extremes of Good and Evil) by Cicero, written in 45 BC. This
                    book is a treatise on the theory of ethics, very popular
                    during the Renaissance. The first line of Lorem Ipsum,
                    &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in section
                    1.10.32.
                  </p>
                </div>
                <h2>Créditos</h2>
                <div className={"border border-solid rounded-md p-3 mb-3"}>
                  <p>
                    The standard chunk of Lorem Ipsum used since the 1500s is
                    reproduced below for those interested. Sections 1.10.32 and
                    1.10.33 from &quot;de Finibus Bonorum et Malorum&quot; by Cicero are
                    also reproduced in their exact original form, accompanied by
                    English versions from the 1914 translation by H. Rackham.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </main>
      </div>
    </>
  );
}
