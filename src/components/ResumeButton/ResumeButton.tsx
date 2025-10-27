import { Button } from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';

export default function ResumeButton() {
    return(
        <Button 
            as='a'
            bg='#81E6D9'
            href='https://drive.google.com/file/d/1D7Qbn3axeo6LM52Ek1KD5w3QcfbKRBD3/view?usp=sharing'
            leftIcon={<DownloadIcon />}
            target='_blank'
            variant='solid'
        >
            Resume
        </Button>
    );
}
