import { apiMessages } from "@api/api-errors";
import Button from "@components/Button";
import { ErrorContainer } from './style';

function Error({ status, resource, error, refresh, children }) {
  const messages = apiMessages[status];

  return (
    <ErrorContainer>
      <p>
        {messages ? messages[resource] : error}
      </p>
      {/* <Button onClick={() => refresh()}>Refresh</Button> */}
      { children }
    </ErrorContainer>
  );
}

export default Error;
