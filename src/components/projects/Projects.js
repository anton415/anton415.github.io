import React from 'react';
import { Tab } from 'semantic-ui-react'
import Code from "./Code";
import Design from "./Design";

const panes = [
  { menuItem: 'Code', render: () => <Tab.Pane> <Code/> </Tab.Pane> },
  { menuItem: 'Design', render: () => <Tab.Pane> <Design/> </Tab.Pane> },
]

const Projects = () => <Tab panes={panes} />

export default Projects