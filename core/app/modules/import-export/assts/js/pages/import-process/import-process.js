import Layout from '../../templates/layout';
import Message from '../../ui/message/message';
import Box from '../../ui/box/box';
import Footer from '../../shared/footer/footer';
import Icon from 'elementor-app/ui/atoms/icon';
import Heading from 'elementor-app/ui/atoms/heading';
import Text from 'elementor-app/ui/atoms/text';
import Button from 'elementor-app/ui/molecules/button';

import './import-process.scss';

export default function ImportProcess() {
	const getFooter = () => (
		<Footer separator justify="end">
			<Button variant="contained" color="disabled" text={ __( 'Cancel', 'elementor' ) } url="/import/process" />
		</Footer>
	);

	return (
		<Layout type="import" footer={ getFooter() }>
			<Message className="e-app-import-process">
				<Icon className="e-app-import-process__icon eicon-loading" />

				<Heading variant="lg" className="e-app-import-process__main-title">
					{ __( 'Your Kit Is Being Imported', 'elementor' ) }
				</Heading>

				<Text variant="md">
					{ __( 'This may take a few moments to complete.\nPlease don’t close this window until importing is completed', 'elementor' ) }
				</Text>

				<Box className="e-app-import-process__box">
					{ __( 'Importing global templates', 'elementor' ) }
				</Box>
			</Message>
		</Layout>
	);
}