import { Message } from './section.styled';

export const Section = ({ title, children }) => (
  <div>
    <Message>{title}</Message>
    {children}
  </div>
);
