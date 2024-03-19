import { useParams } from "next/navigation";
import { ChangeEvent, ReactNode, useTransition } from "react";
import { useRouter, usePathname } from "../../navigation";
import cx from "classnames";

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

const localeSwitcherSelect = ({ children, defaultValue, label }: Props) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale },
      );
    });
  };

  return (
    <label
      className={cx(
        "relative text-sky-500 ",
        isPending && "transition-opacity [&:disabled]:opacity-30",
      )}
    >
      <p className="sr-only">{label}</p>
      <select
        className="inline-flex appearance-none rounded-md border-[#ccc] bg-transparent py-1 transition-all duration-100 hover:border-[#B3B3B3]"
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
    </label>
  );
};

export default localeSwitcherSelect;
