import CustomSelect from "@components/CustomSelect";
import { SearchContainer } from "@components/Search/index.container";
import SelectOption from "@components/SelectOption";
import { Wrapper } from "@pages/style";

function Controls({ setFilterBy, filterBy }) {
	return (
		<Wrapper justify>
			<SearchContainer setFilterBy={setFilterBy} filterBy={filterBy}/>
			<CustomSelect
				label="Filter by Region"
				onSelect={({ value: region }) => setFilterBy({ region, name: false })}
				shouldReset={filterBy?.region === false}
			>
				<SelectOption value="">None</SelectOption>
				<SelectOption>Africa</SelectOption>
				<SelectOption value="ame">America</SelectOption>
				<SelectOption>Asia</SelectOption>
				<SelectOption>Europe</SelectOption>
				<SelectOption value="oceania">
					<div style={{ color: 'blue' }}>
						<span style={{ background: 'red' }}>Oceania</span>
					</div>
				</SelectOption>
			</CustomSelect>
		</Wrapper>
	)
}

export default Controls;
