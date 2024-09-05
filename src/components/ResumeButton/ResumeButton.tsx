import { Button } from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';

export default function ResumeButton() {
    return(
        <Button 
            as='a'
            bg='#81E6D9'
            href='https://drive.google.com/file/d/1kW24ZQ65YGhimybm711ilLqxcx4rVbsO/view?usp=sharing'
            leftIcon={<DownloadIcon />}
            target='_blank'
            variant='solid'
        >
            Resume
        </Button>
    );
}
