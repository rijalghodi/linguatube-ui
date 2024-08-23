import {
  MantineColorScheme,
  Select,
  SelectProps,
  useMantineColorScheme,
} from "@mantine/core";
type Props = SelectProps;
export function ColorSchemeInput(props: Props) {
  const { setColorScheme, colorScheme } = useMantineColorScheme();

  const handleChange = (value: string | null) => {
    localStorage.setItem("linguatube.colorScheme", value ?? "");
    setColorScheme((value as MantineColorScheme) ?? "dark");
  };
  return (
    <Select
      label="Theme"
      placeholder="Select theme"
      miw={250}
      data={[
        { value: "dark", label: "Dark" },
        { value: "light", label: "Light" },
      ]}
      value={colorScheme}
      onChange={handleChange}
      {...props}
    ></Select>
  );
}
