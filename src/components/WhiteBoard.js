import React, {Component} from 'react'
import CourseCard from "./CourseCards";
import ModuleList from "./ModuleList";
import LessonTabs from './LessonTabs';
import TopicPills from "./TopicPills";

class WhiteBoard extends Component {
	render() {
		return (
			<div>
				<h1>White Board</h1>
				<TopicPills/>
				<LessonTabs/>
				<ModuleList/>
				<div className="card-deck">
					<CourseCard/>
					<CourseCard/>
					<CourseCard/>
					<CourseCard/>
				</div>
			</div>
		)
	}
}

export default WhiteBoard;