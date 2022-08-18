import Button from '@components/Button';
import CountryCard from "@components/CountryCard";
import Error from "@components/Error";
import Loader from '@components/Loader';
import { RESOURCES } from "@config/constants";
import { Wrapper } from "@pages/style";

function Countries({ isError, isLoading, status, countries = [], error, setFilterBy, filterBy = {} }) {
	const resource = filterBy.name ? RESOURCES.COUNTRY : RESOURCES.COUNTRIES;
	const refresh = () => {
		setFilterBy({});
	}

	return (
		<Wrapper minHeight='calc(100vh - 286px)'>
			{ isLoading && <Loader scale={2}/> }
			{isError
				? (
					<Error status={status} resource={resource} error={error}>
						<Button onClick={refresh}>Refresh</Button>
					</Error>
				) : countries.map((country) => (
					<CountryCard
						key={country.name.common}
						{...country}
					/>
				))
			}
		</Wrapper>
	);
}

export default Countries;
