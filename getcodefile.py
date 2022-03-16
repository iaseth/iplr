import os
import sys


class IFile():
	def __init__(self, path):
		self.path = path

	def exists(self):
		return os.path.isfile(self.path)

	def mtime(self):
		return os.path.getmtime(self.path)

	def __str__(self):
		return self.path

def update_file(input_path, output_path):
	input_file = IFile(input_path)
	output_file = IFile(output_path)

	if not input_file.exists():
		print(f"Input file NOT found: '{input_file}'")
		return
	else:
		print(f"Input file was found: '{input_file}'")

	if not output_file.exists():
		print(f"\toutput file NOT found: '{output_file}'")
	else:
		print(f"\toutput file was found: '{output_file}'")

	if input_file.mtime() > output_file.mtime():
		print(f"\t\toutput file needs update: {output_file}")
		with open(output_file.path, "w") as out:
			out.write(open(input_file.path).read())
			print(f"\t\tupdated: {output_file}")
	else:
		print(f"\t\toutput file is up-to-date: {output_file}")


def main():
	if len(sys.argv) < 2:
		print("Too few args!")
		return
	elif len(sys.argv) > 2:
		print("Too many args!")
		return

	source_basepath = sys.argv[1]
	if not os.path.isdir(source_basepath):
		print(f"Directory NOT found: '{source_basepath}'")
		return

	bundle_input_path = os.path.join(source_basepath, "bundle.json")
	bundle_output_path = os.path.join("public/data/bundle.json")
	update_file(bundle_input_path, bundle_output_path)

	codes_input_path = os.path.join(source_basepath, "codes.json")
	codes_output_path = os.path.join("src/codes.json")
	update_file(codes_input_path, codes_output_path)

if __name__ == '__main__':
	main()