import { BackButton } from "@components/BackButton";
import { Paragraph } from "@components/NotFound/style";

function NotFound() {
  return (
    <Paragraph>
      <BackButton />
      404 Page not found
    </Paragraph>
  );
}

export default NotFound;
