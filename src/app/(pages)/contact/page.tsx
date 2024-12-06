import GoogleCaptchaWrapper from "@/components/GoogleCaptchaWrapper";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ContactForm from "./components/contact-form";

export default function page() {
  return (
    <div className="flex w-full justify-center">
      <Card className="flex flex-col sm:max-w-lg lg:max-w-xl">
        <CardHeader>
          <CardTitle className="text-4xl font-bold">Contact me!</CardTitle>
          <CardDescription className="text-xl text-muted-foreground">
            If you have any questions or just want to say hi, feel free to reach
            out to me using this form!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <GoogleCaptchaWrapper>
            <ContactForm />
          </GoogleCaptchaWrapper>
        </CardContent>
      </Card>
    </div>
  );
}
