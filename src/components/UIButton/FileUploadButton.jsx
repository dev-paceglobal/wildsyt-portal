import React, {useRef} from 'react'
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined'
import {Avatar, Box, Button, Stack, Typography} from '@mui/material'
import {
  FileAvatar,
  Input,
  UIBoxInput,
  UIFileImg,
  UIFileMainBox,
  UILoadingBox,
  UIStyledInputButton,
} from './ui'
import PersonIcon from '@mui/icons-material/Person'
import CircularProgress from '@mui/material/CircularProgress'
import PartyModeIcon from '@mui/icons-material/PartyMode'
import CameraAltIcon from '@mui/icons-material/CameraAlt'
import BackupSharpIcon from '@mui/icons-material/BackupSharp'
// import CloudIcon from '../../assest/icons/uploadIcon.png'

const FileInputButton = ({
  isFileUpload,
  data,
  _handleChangeImage,
  isWithoutBg,
  srcImg,
  isImageUploading,
  ...props
}) => {
  const fileInputRef = useRef(null)

  const _handleInputClick = (e) => {
    fileInputRef.current.click()
  }

  return (
    <>
      <UIStyledInputButton data={data} disableRipple>
        <Stack direction='column' alignItems='center' spacing={0}>
          <Input accept='image/*' ref={fileInputRef} type='file' onChange={_handleChangeImage} />
          {isImageUploading ? (
            <UILoadingBox>
              <CircularProgress sx={{height: 100, width: 100}} />
            </UILoadingBox>
          ) : (
            <UIFileMainBox>
              {srcImg ? (
                <UIFileImg src={srcImg} alt='img' {...props} />
              ) : (
                <FileAvatar>
                  <PersonIcon fontSize='large' />
                </FileAvatar>
              )}
              <UIBoxInput onClick={_handleInputClick}>
                {!data?.imagePath && !isFileUpload && (
                  <BackupSharpIcon
                    sx={{
                      fontSize: '35px',
                      color: (theme) => theme.palette.primary.main,
                      backgroundColor: 'white',
                      borderRadius: '50%',
                      padding: '5px',
                    }}
                  />
                )}
              </UIBoxInput>
            </UIFileMainBox>
          )}
        </Stack>
      </UIStyledInputButton>
    </>
  )
}

export default FileInputButton
