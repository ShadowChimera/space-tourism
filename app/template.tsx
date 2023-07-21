import Background from './components/Background';

const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Background />
      {children}
    </>
  );
};

export default Template;
