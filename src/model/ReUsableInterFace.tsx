// primary button props values
export interface PrimaryButtonProps {
  children: React.ReactNode;
  onPress?: () => void;
  disabled?: boolean;
  loading?: boolean; // Add this line
}

// secondary button props values
export interface SecondaryButtonProps {
  children: React.ReactNode;
  onPress?: () => void;
  disabled?: boolean;
}
