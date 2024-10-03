import React from 'react';
import { Link } from 'react-router-dom';
import './Resources.css'

const Resources = ({ classId }) => {
    return (
        <section className="resources-container">
            <ul className="resources-list">
                <Link to={`${classId}/exams`} className="resource-item">Practice Exams</Link><br></br>
                <Link to={`${classId}/links`} className="resource-item">Study Materials</Link>
            </ul>
        </section>
    );
};

export default Resources;