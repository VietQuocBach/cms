import { Box } from '@mui/material'

import Viewer from '@/components/viewer'

function StreamPage() {
  return (
    <Box display={'flex'} flex={1} minHeight={'100%'}>
      <Viewer />
    </Box>
  )
}

export default StreamPage
