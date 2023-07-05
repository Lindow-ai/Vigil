import { Navbar, Text, Avatar, Dropdown, Input } from "@nextui-org/react";
import { AcmeLogo } from "../../assets/AcmeLogo";
import { SearchIcon } from "../../assets/SearchIcon";
import { useEffect, useState } from "react";

const AppBar = () => {

  const [inputWidth, setInputWidth] = useState('650px');

  useEffect(() => {
    function handleResize() {
      const windowWidth = window.innerWidth;
      // Adapter la taille de l'input en fonction de la taille de l'écran
      if (windowWidth <= 768) {
        setInputWidth('100%');
      } else if (windowWidth <= 1024) {
        setInputWidth('80%');
      } else {
        setInputWidth('450px');
      }
    }

    // Ajouter un écouteur d'événement pour la taille de l'écran
    window.addEventListener('resize', handleResize);

    // Nettoyer l'écouteur d'événement lors du démontage du composant
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Navbar isBordered variant="" maxWidth="fluid" >
      <Navbar.Brand css={{ mr: "$4" }} enableCursorHighlight>
        <AcmeLogo />
        <Text b color="inherit" css={{ mr: "$11" }} hideIn="xs">
          ACME
        </Text>
        {/* <Navbar.Content hideIn="xs" variant="highlight" enableCursorHighlight>
          <Navbar.Link isActive href="#">
            Dashboard
          </Navbar.Link>
          <Navbar.Link href="#">Team</Navbar.Link>
          <Navbar.Link href="#">Activity</Navbar.Link>
          <Navbar.Link href="#">Settings</Navbar.Link>
        </Navbar.Content> */}
      </Navbar.Brand>
      <Navbar.Content>
        <Navbar.Item>
          <Input
            clearable
            size="lg"
            width={inputWidth}
            contentLeft={
              <SearchIcon fill="var(--nextui-colors-accents6)" size={16} />
            }
            contentLeftStyling={false}
            css={{
              "& .nextui-input-content--left": {
                h: "100%",
                ml: "$4",
                dflex: "center",
              },
            }}
            placeholder="Search..."
          />
        </Navbar.Item>
      </Navbar.Content>
      <Navbar.Content>
        <Dropdown placement="bottom-right">
          <Navbar.Item>
            <Dropdown.Trigger>
              <Avatar
                bordered
                as="button"
                color="primary"
                size="md"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </Dropdown.Trigger>
          </Navbar.Item>
          <Dropdown.Menu
            aria-label="User menu actions"
            color="secondary"
            onAction={(actionKey) => console.log({ actionKey })}
          >
            <Dropdown.Item key="profile" css={{ height: "$18" }}>
              <Text b color="inherit" css={{ d: "flex" }}>
                Signed in as
              </Text>
              <Text b color="inherit" css={{ d: "flex" }}>
                zoey@example.com
              </Text>
            </Dropdown.Item>
            <Dropdown.Item key="settings" withDivider>
              My Settings
            </Dropdown.Item>
            <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
            <Dropdown.Item key="analytics" withDivider>
              Analytics
            </Dropdown.Item>
            <Dropdown.Item key="system">System</Dropdown.Item>
            <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
            <Dropdown.Item key="help_and_feedback" withDivider>
              Help & Feedback
            </Dropdown.Item>
            <Dropdown.Item key="logout" withDivider color="error">
              Log Out
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar.Content>
    </Navbar>
  );
}

export default AppBar;