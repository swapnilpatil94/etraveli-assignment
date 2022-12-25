import PropTypes from "prop-types";
import styles from './SplitScreen.module.css';
import { Box, Divider } from '@mui/material';
 
const SplitScreen = ({ leftPane, RightPane }) => {
	return (
		<Box className={styles.splitScreen}>
			<Box  className={`${styles.leftPane} ${styles.height}`  }>
				{leftPane}
			</Box>
			<Divider />
			<Box data-testid="right-pane" className={`${styles.RightPane} ${styles.height}`}>
				{RightPane}
			</Box>
		</Box>
	)
}

SplitScreen.propTypes = {
	leftPane: PropTypes.node.isRequired,
	RightPane: PropTypes.node.isRequired
};

export default SplitScreen