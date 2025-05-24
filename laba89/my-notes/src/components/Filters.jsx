import { Select, Portal, createListCollection, Input } from "@chakra-ui/react"

// export default function Filters({ filter, setFilter }) {
//   return (
//     <div className="flex flex-col gap-5">
//       <Input
//         placeholder="Поиск"
//         onChange={(e) => setFilter({ ...filter, search: e.target.value })}
//       />
//       <Select
//         onChange={(e) => setFilter({ ...filter, sortOrder: e.target.value })}
//       >
//         <option value={"desc"}>Сначала новые</option>
//         <option value={"asc"}>Сначала старые</option>
//       </Select>
//     </div>
//   );
// }

export const filters = createListCollection({
    items: [
      {label: "Сначала новые", value: "new"},
      {label: "Сначала старые", value: "old"}
    ]
})

export default function Filters() {
    return (
        <Select.Root collection={filters} size={"sm"}>
            <Select.HiddenSelect />
            <Select.Label />
            <Select.Control>
              <Select.Trigger>
                <Select.ValueText placeholder="Выберите фильтр" />
              </Select.Trigger>
              <Select.IndicatorGroup>
                <Select.Indicator />
              </Select.IndicatorGroup>
            </Select.Control>
            <Portal>
              <Select.Positioner>
                <Select.Content>
                  {filters.items.map((filter) => (
                    <Select.Item item={filter} key={filter.value}>
                      {filter.label}
                      <Select.ItemIndicator />
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Positioner>
            </Portal>
        </Select.Root>
    )
}