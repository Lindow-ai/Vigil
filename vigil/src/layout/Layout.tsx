import Box from "../components/Box";

type LayoutProps = {
  children: React.ReactElement;
}

export const Layout = ({ children } : LayoutProps) => (
  <Box
    css={{
      maxW: "100%"
    }}
  >
    {children}
  </Box>
);