import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { X } from "lucide-react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

export function ImageModal({ isOpen, onClose, imageSrc, imageAlt }: ImageModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 overflow-hidden bg-black/95 border-0" aria-describedby={undefined}>
        <VisuallyHidden>
          <DialogTitle>Image Viewer</DialogTitle>
        </VisuallyHidden>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          data-testid="button-close-modal"
        >
          <X className="h-6 w-6 text-white" />
        </button>
        <div className="flex items-center justify-center w-full h-full p-8">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="max-w-full max-h-[85vh] object-contain"
            data-testid="img-modal-fullscreen"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
