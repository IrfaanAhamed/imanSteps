import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@material-tailwind/react";

function Videos() {
  return (
    <div className="my-12 grid md:grid-cols-2 gap-3 duration-300">
      <Card className="dark:bg-gray-900 ">
        <CardHeader
          shadow={false}
          floated={false}
          className="relative grid h-56 place-items-center dark:bg-gray-600 bg-gray-300"
        >
          <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="h-12 w-12 text-gray-500 dark:text-gray-900"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
        />
      </svg>
        </CardHeader>
        <CardBody>
          <Typography
            as="div"
            variant="h1"
            className="mb-4 h-3 w-56 rounded-full bg-gray-300 dark:bg-gray-600"
          >
            &nbsp;
          </Typography>
          <Typography
            as="div"
            variant="paragraph"
            className="mb-2 h-2 w-full rounded-full bg-gray-300 dark:bg-gray-600"
          >
            &nbsp;
          </Typography>
          <Typography
            as="div"
            variant="paragraph"
            className="mb-2 h-2 w-full rounded-full bg-gray-300 dark:bg-gray-600"
          >
            &nbsp;
          </Typography>
          <Typography
            as="div"
            variant="paragraph"
            className="mb-2 h-2 w-full rounded-full bg-gray-300 dark:bg-gray-600"
          >
            &nbsp;
          </Typography>
          <Typography
            as="div"
            variant="paragraph"
            className="mb-2 h-2 w-full rounded-full bg-gray-300 dark:bg-gray-600"
          >
            &nbsp;
          </Typography>
        </CardBody>
        </Card>
        <Card className="dark:bg-gray-900">
        <CardHeader
          shadow={false}
          floated={false}
          className="relative grid h-56 place-items-center dark:bg-gray-600 bg-gray-300"
        >
          <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="h-12 w-12 text-gray-500 dark:text-gray-900"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
        />
      </svg>
        </CardHeader>
        <CardBody>
          <Typography
            as="div"
            variant="h1"
            className="mb-4 h-3 w-56 rounded-full bg-gray-300 dark:bg-gray-600"
          >
            &nbsp;
          </Typography>
          <Typography
            as="div"
            variant="paragraph"
            className="mb-2 h-2 w-full rounded-full bg-gray-300 dark:bg-gray-600"
          >
            &nbsp;
          </Typography>
          <Typography
            as="div"
            variant="paragraph"
            className="mb-2 h-2 w-full rounded-full bg-gray-300 dark:bg-gray-600"
          >
            &nbsp;
          </Typography>
          <Typography
            as="div"
            variant="paragraph"
            className="mb-2 h-2 w-full rounded-full bg-gray-300 dark:bg-gray-600"
          >
            &nbsp;
          </Typography>
          <Typography
            as="div"
            variant="paragraph"
            className="mb-2 h-2 w-full rounded-full bg-gray-300 dark:bg-gray-600"
          >
            &nbsp;
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
}

export default Videos;
