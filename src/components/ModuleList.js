import React from 'react'
import ModuleListItem from "./ModuleListItem";

class ModuleList extends React.Component {
	render() {
		return(
			<ul className="list-group">
				<ModuleListItem/>
				<ModuleListItem/>
				<ModuleListItem/>
				<ModuleListItem/>
				<ModuleListItem/>
			</ul>
		)
	}
}

export default ModuleList;