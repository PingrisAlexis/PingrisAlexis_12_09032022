import React, {useEffect, useState} from 'react';
import styles from './OverallPerformances.module.scss';
import {RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Radar} from 'recharts';
import {Api} from '../../services/api';
import {useParams} from 'react-router-dom';
import DailyActivities from "../daily-activities/DailyActivities";
import PropTypes from "prop-types";

/**
 * @name OverallPerformances
 * @description This component will render the global performance for a specific user.
 * (energy, cardio, endurance, strength, speed ans intensity)
 * @returns {JSX.Element}
 */

const OverallPerformances = ( {performance}) => {
    // const [performances, setPerformances] = useState([]);
    // const {id} = useParams();
    //
    // useEffect(() => {
    //     (async () => {
    //         const response  = await new Api().getPerformances(id)
    //         setPerformances(response);
    //     })();
    // }, []);

    return  <div className={styles.overall_performances_container} >
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart outerRadius={90}  data={performance}>
                <PolarGrid radialLines={false} />
                <PolarAngleAxis
                    dataKey="subject"
                    tickSize={10}
                    tick={{
                        fill: "white",
                        fontSize: 10,
                        fontWeight: 500,
                        y: 200,
                    }}
                />
                <Radar dataKey="A" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
            </RadarChart>
        </ResponsiveContainer>
    </div>

}
// OverallPerformances.propTypes = {
//     performance : PropTypes.object,
// }

export default OverallPerformances;