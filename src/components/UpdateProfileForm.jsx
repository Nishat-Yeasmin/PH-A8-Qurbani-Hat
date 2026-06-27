import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await authClient.updateUser({
      name: form.name,
      image: form.image,
    });

    if (res.error) {
      toast.error(res.error.message || "Update failed");
      return;
    }

    toast.success("Profile updated successfully!");
  } catch (err) {
    toast.error("Something went wrong!");
  }
};