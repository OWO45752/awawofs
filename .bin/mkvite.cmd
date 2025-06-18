@ECHO OFF
SETLOCAL

IF "%~1"=="" (
    ECHO Usage: mkvite ^<Project Name^>
    EXIT /B 1
)

SET "PROJECT_NAME=%~1"

npm create vite@latest "%PROJECT_NAME%" -- || EXIT /B %ERRORLEVEL%

ECHO Installing dependencies...

pushd "%PROJECT_NAME%"
IF ERRORLEVEL 1 (
    ECHO Failed to change directory to %PROJECT_NAME%
    EXIT /B 1
)

npm install || (
    ECHO npm install failed
    popd
    EXIT /B 1
)

popd

ECHO Project "%PROJECT_NAME%" setup complete.
ENDLOCAL
