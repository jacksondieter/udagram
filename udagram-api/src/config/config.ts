import * as dotenv from "dotenv";
dotenv.config();

export const config = {
  username: `${process.env.RDS_USERNAME}`,
  password: process.env.RDS_PASSWORD,
  database: process.env.RDS_DB_NAME,
  port: Number(process.env.RDS_PORT),
  host: process.env.RDS_HOSTNAME,
  dialect: "postgres",
  aws_region: process.env.AWS_DEFAULT_REGION,
  aws_profile: process.env.AWS_PROFILE,
  aws_bucket: process.env.AWS_BUCKET,
  aws_media_bucket: process.env.AWS_MEDIA_BUCKET,
  url: process.env.URL,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  secret_access_key: process.env.AWS_ACCESS_KEY_ID,
  access_key_id: process.env.AWS_SECRET_ACCESS_KEY
};
