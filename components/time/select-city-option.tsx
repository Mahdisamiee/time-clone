import Select, { components, OptionProps } from "react-select";

const Option = (props: OptionProps<{ label: string; subLabel?: string }, false>) => {
    const { label, subLabel } = props.data || {};
    return (
      <components.Option {...props}>
        <p className="inline" >{label}</p>
        {subLabel ? (
          <span className="text-gray-400 text-sm"> - {subLabel}</span>
        ) : null}
      </components.Option>
    );
  };

export default Option