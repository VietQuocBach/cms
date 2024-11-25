import { Box, Container, Table, TableCell, TableContainer, TableHead, Typography } from '@mui/material'

function UsersPage() {
  return (
    <Box display={'flex'} flex={1} minHeight={'100%'}>
      <iframe
        title="Speckle"
        src="https://app.speckle.systems/projects/e8b775d472/models/da3f774e71#embed=%7B%22isEnabled%22%3Atrue%7D"
        width="100%"
        height="100%"
        frameBorder={0}
      ></iframe>
      {/* <iframe
        width={'100%'}
        className="sketchfab-model"
        data-sketchfab-model="8cbdb44f5d624d22a3b0edd6781320c3"
        src="https://sketchfab.com/models/8cbdb44f5d624d22a3b0edd6781320c3/embed?autostart=0&transparent=1&ui_infos=0&ui_start=0&scrollwheel=1"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        onmousewheel=""
        tabindex="-1"
      ></iframe> */}
    </Box>
  )
}

export default UsersPage
