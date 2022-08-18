import { Flag } from '@components/Flag';
import { Card, CardLink, CardText } from "@components/CountryCard/style";
import { slugify } from "@utilities/string";
import { CardTextContainer } from './style';
import { CardHeading } from './style';

function CountryCard(props) {
  const { name: { common: name }, flags: [_, flag], population, region, capital } = props;

  return (
    <Card hover>
      <Flag src={flag} name={name} />
      <CardTextContainer>
        <CardHeading>
          <CardLink title={name} to={`/${slugify(name)}`}>{name}</CardLink>
        </CardHeading>
        <CardText>
          <span>Population:</span> {population}
        </CardText>
        <CardText>
          <span>Region:</span> {region}
        </CardText>
        {capital && (
          <CardText>
            <span>Capital:</span> {capital}
          </CardText>
        )}
      </CardTextContainer>
    </Card>
  );
}

export default CountryCard;
